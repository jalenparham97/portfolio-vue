<template>
  <section class="navigation">
    <nav class="nav">
      <div class="nav-brand" @click="$router.push('/')">
        <h2>JP</h2>
      </div>

      <div class="nav-navigation">
        <div class="nav-item" v-for="item in menu" :key="item.page">
          <button
            :class="isCurrentPage(item.page)"
            class="nav-link ripple"
            @click="go(item.to, item.page)"
          >{{ item.page }}</button>
        </div>
        <div class="nav-item" @click="drawer = !drawer">
          <button class="menu-btn ripple">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>

    <!-- Side Navigation -->
    <!-- <vs-sidebar parent="body" color="primary" class="sidebarx" spacer v-model="drawer">
      <div class="header-sidebar" slot="header">
        <h4>Jalen Parham</h4>
      </div>

      <vs-sidebar-item
        v-for="(item, i) in menu"
        :key="i"
        :index="i"
        @click="go(item.to, item.page)"
      >
        <i :class="item.icon" class="icon"></i>
        {{ item.page }}
      </vs-sidebar-item>
    </vs-sidebar>-->
  </section>
</template>

<script>
export default {
  props: ["currentPage", "isCurrentPage", "go", "menu"]
};
</script>


<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em;
  margin: 0 auto;
  width: 95%;
}

.nav-navigation {
  display: flex;
  align-items: center;
}

.nav-brand h2 {
  color: #4c4981;
  font-size: 1.8rem;
  cursor: pointer;
}

.nav-item {
  margin-left: 2em;
  margin-right: 0px;
}

.nav-link {
  background: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  color: #4c4981;
  padding: 0.3em 0.8em;
  border: 1px solid #6c63ff;
  border-radius: 20px;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
}

.nav-link:hover {
  background: #6c63ff;
  color: #fff;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.menu-btn {
  color: #4c4981;
  font-size: 1.5rem;
  padding: 10px 15px;
  background: transparent;
  border: none;
  border-radius: 80px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  display: none;
}

.menu-btn:hover {
  background: #6c63ff;
  color: #fff;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.dropdown {
  position: relative;
  display: inline-block;
  /* margin-right: 200px; */
}

.dropdown-content {
  /* display: none; */
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.active {
  background: #6c63ff;
  color: #fff;
}

.icon {
  margin-right: 10px;
}

@media only screen and (max-width: 850px) {
  .nav-link {
    /* display: none; */
  }

  .menu-btn {
    /* display: block; */
  }
}
</style>
