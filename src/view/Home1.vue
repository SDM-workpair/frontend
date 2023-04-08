<script src="https://kit.fontawesome.com/68eab83108.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>
<script src="app.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
<template>
  <!-- <div v-is='script src="https://kit.fontawesome.com/68eab83108.js" crossorigin="anonymous"'></div>
  <div v-is=''></div>
  <div v-is=''></div>
  <div v-is='script src="https://kit.fontawesome.com/68eab83108.js" crossorigin="anonymous"'></div>
  <div v-is='script src="https://kit.fontawesome.com/68eab83108.js" crossorigin="anonymous"'></div>
  <div v-is='script src="https://kit.fontawesome.com/68eab83108.js" crossorigin="anonymous"'></div>
  <div v-is='script src="https://kit.fontawesome.com/68eab83108.js" crossorigin="anonymous"'></div>
  <div v-is='script src="https://kit.fontawesome.com/68eab83108.js" crossorigin="anonymous"'></div> -->
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css"/>
    

</head>

<body>

    <div  class="main-container d-flex">
        <div class="sidebar" id="side_nav">
            <div class="header-box px-2 pt-3 pb-4">
                <h1 class="fs-4"><span class="text-white px-2 me-2">Teamatch</span></h1>
                <button class="btn d-md-none d-block close-btn px-1 py-0 text-white"><i class="fas fa-stream"></i></button>
            </div>

            <ul class="list-unstyled px-2">
                <li class=""><button href="#" class="btn btn-primary">新增配對空間</button></li>
                <li class="" style="padding-bottom: 10px; padding-top: 20px;"><a href="#" class="text-decoration-none text-white"><i class="fa-solid fa-users" style="color: #ffffff;"></i>  所有配對空間</a></li>
                <li class="" style="padding-bottom: 10px;"><a href="#" class="text-decoration-none"><i class="fa-solid fa-user" style="color: #ffffff;"></i>  我的配對空間</a></li>
                <li class=""><a href="#" class="text-decoration-none"><i class="fa-solid fa-comment" style="color: #ffffff;"></i>  我的小組</a></li>
            </ul>
            <hr class="h-color mx-2">

        </div>
        <div class="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
            
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                      </form>
                    </ul>
                    
                  </div>
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a href="#"><i class="fa-solid fa-bell fa-2xl"></i></a>
                    </li>
                    <li class="nav-item">
                      <a href="#"><i class="fa-solid fa-circle-user fa-2xl"></i></a>
                    </li>
                  </ul>

                </div>
              </nav>

              <div id="app">
                <route-view></route-view>
              </div>

        </div>


        
            
        </div>
        
 

    
    
    

    

</body>
</template>