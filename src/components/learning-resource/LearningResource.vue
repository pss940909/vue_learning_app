<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ des }}</p>
    <nav>
      <a :href="resLink">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: ['title', 'des', 'resLink'],
};
</script>
