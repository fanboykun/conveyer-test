<script>
   export let title;
   export let type;
//    let customClass = '';
//    export { customClass as class};
</script>

<button type="{type}" class="p-2 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white font-semibold shadow-lg">
    {title}
    <slot />
</button>