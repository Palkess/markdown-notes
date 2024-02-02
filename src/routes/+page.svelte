<script lang="ts">
    import { invoke } from "@tauri-apps/api";

    let greetMsg = '';

    async function greeting(name: string) {
        greetMsg = await invoke('greet', { name });
    }
</script>

<button on:click={() => greeting('jonas')}>Hälsa</button>
<button on:click={() => greetMsg = ''}>Reset</button>

{greetMsg}
