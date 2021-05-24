

const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const aboutContact = document.querySelector('#about-contact')
const chromee = document.querySelector('#chrome')
const chromContent = document.querySelector('.chrome-content')

const folder = document.querySelector('.folder')
const folder1 = document.querySelector('.folder1')
const folder2 = document.querySelector('.folder2')
const folder3 = document.querySelector('.folder3')
const folder4 = document.querySelector('.folder4')
const folder5 = document.querySelector('.folder5')
const folder6 = document.querySelector('.folder6')
const folder7 = document.querySelector('.folder7')
const folder8 = document.querySelector('.folder8')

const folderContinut1 = document.querySelector('.folder1-continut')


chromee.addEventListener('click' , ()=> {
    const chromeBox = new WinBox({
        title : 'I am a Chrome Window',
        width:"500px" , 
        height : "400px", 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : chromContent,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})

folder.addEventListener('click' , ()=> {
    const folderBox = new WinBox({
        title : 'I am a Folder Window',
        width:"500px" , 
        height : "400px", 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : folderContinut1,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})
folder1.addEventListener('click' , ()=> {
    const folderBox = new WinBox({
        title : 'I am a Folder Window',
        width:"500px" , 
        height : "400px", 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : folderContinut1,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})
folder2.addEventListener('click' , ()=> {
    const folderBox = new WinBox({
        title : 'I am a Folder Window',
        width:"500px" , 
        height : "400px", 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : folderContinut1,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})
folder3.addEventListener('click' , ()=> {
    const folderBox = new WinBox({
        title : 'I am a Folder Window',
        width:"500px" , 
        height : "400px", 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : folderContinut1,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})
folder4.addEventListener('click' , ()=> {
    const folderBox = new WinBox({
        title : 'I am a Folder Window',
        width:"500px" , 
        height : "400px", 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : folderContinut1,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})
folder5.addEventListener('click' , ()=> {
    const folderBox = new WinBox({
        title : 'I am a Folder Window',
        width:"500px" , 
        height : "400px", 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : folderContinut1,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})
folder6.addEventListener('click' , ()=> {
    const folderBox = new WinBox({
        title : 'I am a Folder Window',
        width:"500px" , 
        height : "400px", 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : folderContinut1,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})
folder7.addEventListener('click' , ()=> {
    const folderBox = new WinBox({
        title : 'I am a Folder Window',
        width:"500px" , 
        height : "400px", 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : folderContinut1,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})
folder8.addEventListener('click' , ()=> {
    const folderBox = new WinBox({
        title : 'I am a Folder Window',
        width:"500px" , 
        height : "400px", 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : folderContinut1,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})

about.addEventListener('click' , ()=> {
    const aboutBox = new WinBox({
        title : 'About Me',
        width : '450px' , 
        // avem si modal daca vrem ,o setam true,si va fi modal,nu vom mai putea muta fereastra
        modal : false,
        height : '450px', 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : aboutContent,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})

contact.addEventListener('click' , () => {
    const contactBox = new WinBox({
        title :'Contact Me',
        background : '#00aa00',
        modal: false, 
        width:'650px' , 
        height : '450px' , 
        top : 100 , 
        right:380 , 
        left : 600 , 
        bottom : 230,
        mount : aboutContact,
        onfocus : function(){
            this.setBackground('#00aa00')
        },
        onblur : function(){
            this.setBackground('#777')
        }
    })
})