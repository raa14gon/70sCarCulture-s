<template>
    <nav>
        <div class="logo">
            <h2>70's</h2>
            <h3>CarCulture</h3>
        </div>

        <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/Cars">Cars </router-link>
            <router-link to="/VintageRacing">Vintage Racing</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style>
nav {
    align-items: center;
    border-top: 8px solid black;
    border-bottom: 8px solid black;
    display: flex;
    height: 70px;
    background-color: #F58F56;
}

.logo {
    margin-left: 20px;
    gap: 0px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;
    background-color: white;
    border-radius: 50%;
}

.logo h2 {
    font-weight: bold;
    font-size: 20px;
    margin: 0;
}

.logo h3 {
    font-weight: bold;
    font-size: 12px;
    margin: 0;
}

.links {
    display: flex;
    margin-left: 30px;
    gap: 20px;
}

.links a {
    font-weight: bold;
    text-decoration: none;
    color: black;
    font-size: 20px;

    &:hover {
        color: white;
    }
}

/* Media Queries - Tablets */
@media (max-width: 1024px) {
    nav {
        height: 60px;
        border-top: 6px solid black;
        border-bottom: 6px solid black;
    }

    .logo {
        width: 55px;
        height: 55px;
        margin-left: 15px;
    }

    .logo h2 {
        font-size: 18px;
    }

    .logo h3 {
        font-size: 10px;
    }

    .links {
        margin-left: 20px;
        gap: 15px;
    }

    .links a {
        font-size: 18px;
    }
}

/* Media Queries - Mobile */
@media (max-width: 768px) {
    nav {
        height: 55px;
        border-top: 5px solid black;
        border-bottom: 5px solid black;
    }

    .logo {
        width: 50px;
        height: 50px;
        margin-left: 10px;
    }

    .logo h2 {
        font-size: 16px;
    }

    .logo h3 {
        font-size: 9px;
    }

    .links {
        margin-left: 15px;
        gap: 12px;
    }

    .links a {
        font-size: 16px;
    }
}

/* Media Queries - Small Mobile */
@media (max-width: 480px) {
    nav {
        height: 50px;
        border-top: 4px solid black;
        border-bottom: 4px solid black;
    }

    .logo {
        width: 45px;
        height: 45px;
        margin-left: 8px;
    }

    .logo h2 {
        font-size: 14px;
    }

    .logo h3 {
        font-size: 8px;
    }

    .links {
        margin-left: 10px;
        gap: 8px;
    }

    .links a {
        font-size: 13px;
    }
}
</style>