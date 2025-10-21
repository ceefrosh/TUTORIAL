document.addEventListener('DOMContentLoaded', function() {
    const leadForm = document.getElementById('lead-form');
    const editForm = document.getElementById('edit-form');
    const leadsTable = document.getElementById('leads-tbody');
    const searchInput = document.getElementById('search');
    const addSection = document.getElementById('add-lead');
    const editSection = document.getElementById('edit-lead');
    const cancelEditBtn = document.getElementById('cancel-edit');

    let leads = JSON.parse(localStorage.getItem('leads')) || [];
    let editId = null;

    function saveLeads() {
        localStorage.setItem('leads', JSON.stringify(leads));
    }

    function renderLeads(filteredLeads = leads) {
        leadsTable.innerHTML = '';
        filteredLeads.forEach(lead => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${lead.firstName}</td>
                <td>${lead.lastName}</td>
                <td>${lead.email}</td>
                <td>${lead.phone}</td>
                <td>${lead.company}</td>
                <td>${lead.status}</td>
                <td>
                    <button class="action-btn edit-btn" data-id="${lead.id}">Edit</button>
                    <button class="action-btn delete-btn" data-id="${lead.id}">Delete</button>
                </td>
            `;
            leadsTable.appendChild(row);
        });
    }

    function addLead(lead) {
        lead.id = Date.now().toString();
        leads.push(lead);
        saveLeads();
        renderLeads();
        leadForm.reset();
    }

    function updateLead(id, updatedLead) {
        const index = leads.findIndex(lead => lead.id === id);
        if (index !== -1) {
            leads[index] = { ...leads[index], ...updatedLead };
            saveLeads();
            renderLeads();
            editSection.style.display = 'none';
            addSection.style.display = 'block';
        }
    }

    function deleteLead(id) {
        leads = leads.filter(lead => lead.id !== id);
        saveLeads();
        renderLeads();
    }

    function editLead(id) {
        const lead = leads.find(lead => lead.id === id);
        if (lead) {
            document.getElementById('edit-id').value = lead.id;
            document.getElementById('edit-firstName').value = lead.firstName;
            document.getElementById('edit-lastName').value = lead.lastName;
            document.getElementById('edit-email').value = lead.email;
            document.getElementById('edit-phone').value = lead.phone;
            document.getElementById('edit-company').value = lead.company;
            document.getElementById('edit-status').value = lead.status;
            editSection.style.display = 'block';
            addSection.style.display = 'none';
        }
    }

    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const lead = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            status: document.getElementById('status').value
        };
        addLead(lead);
    });

    editForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const updatedLead = {
            firstName: document.getElementById('edit-firstName').value,
            lastName: document.getElementById('edit-lastName').value,
            email: document.getElementById('edit-email').value,
            phone: document.getElementById('edit-phone').value,
            company: document.getElementById('edit-company').value,
            status: document.getElementById('edit-status').value
        };
        updateLead(editId, updatedLead);
    });

    cancelEditBtn.addEventListener('click', function() {
        editSection.style.display = 'none';
        addSection.style.display = 'block';
        editForm.reset();
    });

    leadsTable.addEventListener('click', function(e) {
        if (e.target.classList.contains('edit-btn')) {
            editId = e.target.dataset.id;
            editLead(editId);
        } else if (e.target.classList.contains('delete-btn')) {
            const id = e.target.dataset.id;
            if (confirm('Are you sure you want to delete this lead?')) {
                deleteLead(id);
            }
        }
    });

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredLeads = leads.filter(lead =>
            lead.firstName.toLowerCase().includes(query) ||
            lead.lastName.toLowerCase().includes(query) ||
            lead.email.toLowerCase().includes(query) ||
            lead.company.toLowerCase().includes(query)
        );
        renderLeads(filteredLeads);
    });

    renderLeads();
});
