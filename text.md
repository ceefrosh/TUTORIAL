create a custom properties
--color-1 #0f1016
--text-color #f0f0f0
--color-2 #006aff
use universal selector (*)
font-size,font-family, font-weight
height,width,text-decoration(none)
min-height(100vh),min-width(100vw),
max-width(1250px),
list-style(none), text-transform(upper-case ,capitalise)
 color, bg-image(url)
 background,bg-color
backdrop-filter:blur(10px)
 bg-size(cover,)bg-repeat,bg-position(center)
flex,align-item,justify content,flex-direction
flex wrap,flex shrink
margin,padding,border-radius,
white-space(no-wrap)
svg fill, to change its color
display (none ,block,inline,inline-block,inline-flex)
position (fixed,static,relative,absolute,sticky)
position (top,bottom, left, right)
shadow (x,y,blur rgba)
z-index
       (RESPONSIVE NAVBAR CHEATSHEETS)

               HTML

create html boilerplate
create a header tag
create a logo in an anchor tag
create a nav tag where the nav bar will be nested
create a sign up button outsie the nav tag
create input with a type of checkbox

create a label tag consisting of 2 fonts icons
open-btn ,close-btn 
use the same 'FOR' attributes to both the check box
and the label tag
set the input check box and open/close btn to
display none 


                CSS

 create a css basic styles
 css fonts ,univeral selector with basic body styles.

  body{
    min-height
    background properties
   }             
            header tag
   width, position left,right e.t.c 
   background (rgba),backdrop-filter ,padding, display properties
   background=transparent
   box shadow and backdropfilter (blur)  
   high Z-index


   style the logo
   font size, text transform, text decoration ,letter spacing, font weight

   style the anchor tag inside nav tag<nav a>
   font size ,text transform  , margin ,padding, color
   font weight bodder bottom ,transition

   nav a:hover {border bottom,  color}

   button { display, padding, bg-color, color, b-radius, transition, font size, text-transform font weight}

   label(open-btn, close-btn)
        {font- size, cursor,display}




                     MEDIA QUERIES
               @980px
      header(padding, transition)
      nav a(margin, transition, ) 

      @ 789px 
      nav(position (fixed or absolute), top left right, 
      width, bg-color,padding,border-radius,
      transition)

      label(display block, font size, cursor ,color)

      open the navbar bu using the psudo class  checked for the checkbox and use the sibling selector to select the navbar

          RESPONSIVE FOOTER 
                   HTML
footer tag 
footer container

                CSS
    
  footer tag
  position fixed,sticky
  bg-color
  padding T-R-B-L 
   
   footer-container
    
    width, height, bg-color,color,
    display flex, JC, flex wrap, 
    margin0 auto

    footer-header
    display-flex,
    Flex direction-column
    margin-right-4rem

    footer-heading h2
    margin bottom

    footer-heading a

     color, text-decoration, transition
     margin-bottom

     footer-heading a hover
       color,transition
 
         foooter-email-form h2
         margin -bottom

         footer-email

         width, height,, outline
         padding, border-radius, 
         border-none,padding-left,
         margin-bottom,font-size

         footer-email placeholder
         color

         footer-email btn
         width,height, br,outline,border
         color,font-size

         footer-email btn hover
         cursor,bg-color,transition
          

           FLOATING HTML LOGIN

body
display ,W ,min-height

login-box
position, width,height,
padding  UD-LR, bg, border ,BR

login -header
display , flx dir,
text align , margin(TRBL)

header
FW ,color, FS,MB

P
color #555

input-box
position ,width

label
position ,T L tarnsition color

input
width ,height

input-field
FS ,color #333, PL ,MB
border ,BR ,outline

input-field focus
border 2px #8749f2

input-field focus label,
input-field valid label

T ,L ,FS, CL #7931f5 BG 
PD , 0, 5px

input-field valid label
CL #555

 forgot
flx JC MB

section
flx AI,FS CL

check
MR

forgot-link
FW TD CL #7931f5

input-submit
FS CL BG #7931f5 BN BR CSR

middle text
position width
MRG 30 0

OR
position L TRNSFM BG PD 20px

HR 
boder 1px #ddd

social
flx gap

button
flx AL JC BR CSR

GOOGLR
width height PD 0 30px
bg border#ccc

img
width 25
p 
FS width

twitter
JC width height
bg #eee border none

google, twitter, submit hover
opacity .9

sign up
posotion B R

P
FS C #333

A 
TD

MQ
MW 510

login box
PD UP-LR ,MRG

MQ
MW 415

login box
PD UP-LR ,MRG
                     
                     floating Form
                     HTML
footer-container
login-container/box
footer-header ,header/title, paragraph

input-box, input-text, input-field,
label
i-frame

input-box, input-password, input-field,
label
 i-frame

div.remember-forgot
div.remember-me
input-type checkbox id-remember
label
.forgot a forgot password

div .input-submit
input- type submit class-unput-submit value-login

div.sign up
span-dont have an account a-sign up

                     CSS
container
width-100%
min-height-100dvh
display-flex   -AI JC 
BG-CL

LOGIN/BOX CONTAINER

position-relative
width 450px backdrp filter-border
padding- TRBL
b-radius box shadow  CL

login-header
position- absolute
L T 
flex -flx dir-column AI-JC/trnsfrm trnslate X
width 140px height 70px

login-header span
  CL -FS

 login-header before                
 position absolute
 content -T L
 WIDTH height
 border TRR
 BG-transparent 
 BX SHDW 

login-header after
 position absolute
 content -T L
 WIDTH height
 border TLR
 BG-transparent 

 input-box
 positin RLT  -DSPL-flx -flx direction-column
 MARG 20 0

 INPUT FIELD
width 100%
height FS- CL   BG-transparent
B-R
BDR 

LABEL
position absolute
T-l
tansition

body bg
#f3f4f6
 bg fff
 box shadow











 







    

 