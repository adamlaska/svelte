<script>
    let reactive = $state('reactive1');
    let static_ = 'static1';
</script>

<p>{static_} {reactive}</p>
<button onclick={() => { static_ = 'static2'; reactive = 'reactive2'; }}>update</button>
