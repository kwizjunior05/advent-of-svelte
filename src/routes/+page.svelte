<script>
    const days = Array.from(Array(25).keys()).map(x => x + 1);
</script>

<p>See my solutions below:</p>
<ul>
    {#each days as day}
        <li><a href="/day{day.toString().padStart(2, "0")}">Day {day}</a></li>
    {/each}
</ul>
