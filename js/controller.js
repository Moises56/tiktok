usuarios = [
    {
        usuario: 'goku',
        password: 'asd.456',
        nombre: 'Son Goku',
        imgPerfil: 'goku.jpg',
        seguidores: ['krillin', 'bulma', 'vegeta'],
        siguiendo: ['dende', 'gohan', 'goten']
       }
]

tiktok = [
    {
        user: 'Goku',
        nombre: 'Son Goku',
        imgPerfil: 'goku.jpg',
        titulo: "¡Ya basta freezer!",
        fecha: "12/12/2012",
        video: "videos/1.mp4",
        tituloCancion: "Cha la head cha la!",
        likes: 10,
        shares: 15,
        comentarios: [
        { usuario: "krilin", comentario: "Gokuuuuuuuuu!!!!!" },
        { usuario: "vegeta", comentario: "Insecto!!!!!" },
        ],
        hashtags: ["Dogs", "Freezer", "DragonBall"],
    }
]

hashtags = [
    {
        hashtag: 'Dogs',
        videos: 1000000000
    }
]


localStorage = window.localStorage
var imgSelect = '';
var imgP = '';

if(localStorage.getItem("usuarios")==null){
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}else{
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
}

if(localStorage.getItem("tiktok")==null){
    localStorage.setItem("tiktok", JSON.stringify(tiktok))
}else{
    tiktok = JSON.parse(localStorage.getItem("tiktok"))
}

if(localStorage.getItem("hashtags")==null){
    localStorage.setItem("hashtags", JSON.stringify(hashtags))
}else{
    hashtags = JSON.parse(localStorage.getItem("hashtags"))
}



function generarTiktok(){
    document.getElementById('tiktok').innerHTML ='';
   tiktok.forEach(function(tiktok){

       hashtag = tiktok.hashtags
       coment = tiktok.comentarios
        // console.log(coment.usuario);
       
       for (let c = 0; c < coment.length; c++) { 
            chat = ` <p class="cant-chat">${coment.length}</p>`
        }

        hasht = '';
       for (let j = 0; j < hashtag.length; j++) {
            // console.log(hashtag[j])    
            hasht += `#${hashtag[j]}`
        }
    
        document.getElementById('tiktok').innerHTML +=
            `<div class="card">
            <img src="/img/profile-pics/${tiktok.imgPerfil}" class="img-inicial" alt="...">
            <div class="card-body">
              <h5 class="card-title title1">${tiktok.user}</h5>
              <h6 class="card-subtitle mb-2 text-muted title2">${tiktok.nombre}</h6>
              <a class="btn btn-fallowing">Fallow</a>
              <h6 class="card-subtitle mb-2 text-muted title3">${hasht} *-* ${tiktok.titulo}</h6>
              <p class="card-text text1"><i class="fas fa-music me-2"></i>${tiktok.tituloCancion} - ${tiktok.fecha}</p>
              <video class="repro-video" src="/${tiktok.video}" controls="controls"> Vídeo no es soportado... </video>       
              <!-- <video class="repro-video" src="/videos/6.mp4" controls="controls" autoplay="autoplay"> Vídeo no es soportado... </video>        -->
            
                <div class="iconos-like">
                  <a class="btn icono-heart"><i class="fas fa-heart"></i></a>
                  <p class="cant-heart">${tiktok.likes}</p>
                  <a class="btn icono-heart"><i class="fas fa-comment-dots"></i></a>
                  <p class="cant-chat">${chat}</p>
                  <a class="btn icono-heart"><i class="fas fa-share"></i></a>
                  <p class="cant-share">${tiktok.shares}</p>
                </div>                    
            </div>
          </div><hr class="hr-clas">`

    });
}
generarTiktok()

function btnLogin(){
    userName = document.getElementById('user-name').value;
    pwsLogin = document.getElementById('pws-login').value;

    usuarios.forEach(function(user){
        if (userName==user.usuario &&  pwsLogin==user.password) {
            alert('logeadoo');
            console.log(true);

            
          
        }else console.log(false);

    });
}


// id="img-perfil">





const arrayImg = ['androide_18.jpg','androide_16.jpg','kibito.jpg','patricio.jpg','videl.jpg','oolong.jpg']

for (let i = 0; i < arrayImg.length; i++) {
    // console.log(arrayImg[i]);
    imgSelect = arrayImg
    // console.log(arrayImg);
    document.getElementById('img-perfil').innerHTML +=
    `<div class="col-12 img-perfil" >
        <img onclick="imgUser(${i})" class="img-perfil" src="/img/profile-pics/${arrayImg[i]}" alt="">
    </div>
    `
}
function imgUser(i){
    
    console.log(imgSelect[i],i);
    imgP = imgSelect[i]
    
    
}

function userSuggested(){
    document.getElementById('user-suggested').innerHTML = '';
    usuarios.forEach(user => {
        document.getElementById('user-suggested').innerHTML +=
        `<div class="card card-perfiles">
        <img src="/img/profile-pics/${user.imgPerfil}" class="img-inicial-col3" alt="...">
        <div class="card-body">
        <h5 class="card-title title1-col3">${user.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-muted title2-col3">${user.nombre}</h6>
        <a class="btn btn-fallowing-col3">Fallow</a>
        </div>
        </div>`
    });
}userSuggested()

function newCuenta(){
    console.log('crear cuenta');
    userRegistro = document.getElementById('user-registro').value;
    pwsRegistro  = document.getElementById('pws-registro').value;

    const newUser = {
        usuario: userRegistro,
        password: pwsRegistro,
        nombre: userRegistro,
        imgPerfil: imgP,
        seguidores: ['krillin', 'bulma', 'vegeta'],
        siguiendo: ['dende', 'gohan', 'goten']
    }
    usuarios.push(newUser)
    userSuggested()
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    // alert('Usuario Creado')

    // console.log(imgP);
    // console.log(pwsRegistro);
}







//TODO NEW VIDEO-TIKTOK

for (let i = 1; i <= 8; i++) {
    document.getElementById('video-tiktok').innerHTML += 
    `<option value="videos/${i}.mp4">video ${i}</option>`
    
}


function newVideo(){
    // console.log('video Tiktok');
    video = document.getElementById('video-tiktok').value;
    HashTa = document.getElementById('HashTags-tiktok').value;
    msj = document.getElementById('mensaje-tiktok').value;

    // console.log(video);
    // console.log(HashTa);
    // console.log(msj);

    f = new Date()

    userName = document.getElementById('user-name').value;
    pwsLogin = document.getElementById('pws-login').value;

    usuarios.forEach(function(user){
        if (userName==user.usuario &&  pwsLogin==user.password) {
          
            titokn ={
                user: user.usuario,
                nombre: user.nombre,
                imgPerfil: user.imgPerfil,
                titulo: msj,
                fecha: f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(),
                video: video,
                tituloCancion: 'new sonds',
                likes: '2',
                shares: '1',
                comentarios: [],
                hashtags: [HashTa]
            }    

            has = {
                hashtag: HashTa,
                videos: 0
                
            }
            tiktok.push(titokn)
            hashtags.push(has)
            generarTiktok()
            discover()
            
            localStorage.setItem("tiktok", JSON.stringify(tiktok))
            localStorage.setItem("hashtags", JSON.stringify(hashtags))
            console.log('creado', titokn);
          
        }else console.log(false);

    });

}


function discover(){

    document.getElementById('hastaggs').innerHTML ='';
    hashtags.forEach(hasht => {
        console.log(hasht.hashtag);

       video = hasht.videos

    //    console.log(video.map(Math.round));

        document.getElementById('hastaggs').innerHTML +=
        `<div class="card discover-class" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title titulo-col3">#${hasht.hashtag}</h5>
          <h6 class="card-subtitle mb-2 text-muted titulo2-col3">${video}M of videos <i class="fas fa-chevron-right"></i></h6>
          
        </div>
      </div>
        `


    });

}discover()
