#Remote LED Control on rpi

###app side
 - run on your own computer
 - only ./app directory is needed

        cd app
        yarn

 - change the ./app/axios.js baseURL into right ip address
  
        yarn start
  
 - you can also download expo go and scan the qr code to run on your phone

###rpi side
 - only ./backend directory is needed
 - connect led to GPIO 4

    cd backend
    yarn
    yarn server

