<template>
  <div>
    <nav class="nav-list-wrapper">
      <ul class="nav-list">
        <li class="nav-list-item" ><a href="#">リンク1</a></li>
        <li class="nav-list-item" ><a href="#">リンク2</a></li>
        <li class="nav-list-item" ><a href="#">リンク3</a></li>
      </ul>
    </nav>
  </div>
</template>

<style>
  .nav-list-wrapper {
    padding: 10px;
  }

  .nav-list {
    display: flex;
  }
  .nav-list-item {
    list-style: none;
    padding: 8px 0;
  }
  .nav-list-item a {
    color: #958009;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
  }
  .nav-list-item a:hover{
    background: #f3d774;
    opacity: .8;
    color: #fff;
  }
</style>