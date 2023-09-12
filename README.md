# MohamedOsamaKhaled.github.io
MohamedOsamaKhaled Portfolio

# How to deploy the react app?
 step-1: open package.json file and add this: 
 
 		"homepage": "https://myusername.github.io/my-app",
        
 step-2: install github pages form your terminal: 
 
 		 npm install --save gh-pages  
         
 step-3: add the following scripts in- scripts field in- package.json:
 
		    "predeploy": "npm run build", 
		    "deploy": "gh-pages -d build",
            
 step-4: push all changes to git: 
 
 		 git add
 		 git commit -m "your commit"
         git push 
         
 step-5: Now final command: 
 
         npm run deploy 
         
Notes: read(https://create-react-app.dev/docs/deployment/#github-pages)
       watch(https://youtu.be/Q9n2mLqXFpU?t=545)
