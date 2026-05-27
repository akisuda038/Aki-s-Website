
# 1. web_test Intro.
 - This is a demo and template to create your own website using git, VS code, and github. 
 - You could skip the git and VS code and use the github web version directly to create your own website.

 - To use local dev., follow instructions 2 , 4, 5
 - To use web. dev., follow instructions 3 , 4, 5

# 2. Local dev. Instructions using git and VS code:
1. Download and install VS code studio 
2. Open terminal: MAC - command + space, type in terminal.  Windows - search terminal
3. Install Git:  sudo dnf install git-all
 - if that doesn't work: try
    
    git --version

    your computer may ask you to install git, which will take ~20 GB storage.

    or

    sudo apt install git-all

4. Copy URL of your repo - use SSH url
5. Clone your project to the local computer using the following command

    git clone your_url

6. Navigate to your project using VS code


## 2.1 Push changes to git ** 

1. In terminal, go to your folder. Follow the below command exactly.
2. git add .
3. git commit -m "update contents"
4. git push origin main

## 2.2 Don't have ssh-key?

1. ssh-keygen -t rsa -C "you@example.com" 

2. copy the key to your repo add public key   

## 2.3 Preveiw your change locally
1. Save all your changes in VS code

2. Go to your folder on computer ---> double click index.html



# 3. Web dev. using github directly

 - You may navigate to the github repo. and make changes online directly. Click on edit button, make any neccessary changes that you need. Then Commit changes with your messages. 

 - Add useful commit messages about what has changed, so you could find them later if you changed your mind.

## 3.1 Preveiw your change online

 - Where do I find my url?  your repo ---> Settings ----> Pages   

 - Save the URL in your bookmark and refresh it after you commit your changes. 

 - Use your saved webpage url, refresh your page after saving.  It takes about 30s to have the new change.

# 4. Both local and web dev. use the same change for the following.
## 4.1 Change color

 - Use index.css to change font color and background color.

 *Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.*
## 4.2 Change backgound picture

 - Update pictures in assets folder. Consider to change favicon, planet.  Remember to use the same name and extension.

## 4.3 Change your description

 - Update index.html. Locate your description of any sub-field, update the sentences.

 *HTML, short for HyperText Markup Language, is the foundation of every webpage. It's a markup language used to structure and organize content on the web, defining elements like headings, paragraphs, images, and links.*

## 4.4 Update your resume or use other pdf file

 - Update the pdf file in assets directory
 - Update the pdf file name in the container class, index.html. 
 - Use your best award or accomplished or an art piece for the pdf file.

 *Simply replace the pdf file by uploading a new pdf file, search pdf in index.html and locate the file name that is needed to be replaced.*

# 5. Publish your web

1. Navigate to your project on github. ----> Settings ---->Pages----->Branch (select main)

2. Wait about 30s and refresh the page, you should see the public url now.
  

# 6. References

- Properly cite any images used in your project.

- Cite any other references you have used and update the references.

Earth image:
https://earth.google.com/web

X-Men image:
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.menshealth.com%2Fentertainment%2Fa34773910%2Fx-men-movie-order%2F&psig=AOvVaw2ldcTVfbYTjRs34kqN2iiS&ust=1747758677875000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNithMv6r40DFQAAAAAdAAAAABAE

Code reference:

https://github.com/ndoherty-xyz/unemployables-portfolio-template

https://roboticenergyllc.com

Vincent Garreau  - vincentgarreau.com


