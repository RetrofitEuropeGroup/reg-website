<template>
<main class="font-body">
    <NavigationBar @click="triggerSidebar">
        <!-- <nuxt-link to="/">
            <NavigationItem>Home</NavigationItem>
        </nuxt-link> -->
    </NavigationBar>
    <Nuxt />
    <transition name="slide">
        <NavigationSidebar @click="triggerSidebar" v-if="sidebarTriggered">
            <nuxt-link to="/">
                <NavigationItem @click="triggerSidebar">Home</NavigationItem>
            </nuxt-link>
            <nuxt-link to="/particulier">
                <NavigationItem @click="triggerSidebar">Particulier</NavigationItem>
            </nuxt-link>
            <nuxt-link to="/projecten">
                <NavigationItem @click="triggerSidebar">Projecten</NavigationItem>
            </nuxt-link>
            <NavigationItem @click="triggerSidebar">Contact</NavigationItem>
        </NavigationSidebar>
    </transition>
</main>
</template>

<script>
import NavigationBar from '../components/navigation/NavigationBar';
import NavigationItem from '../components/navigation/NavigationItem';
import NavigationSidebar from '../components/navigation/NavigationSidebar';

export default {
    name: 'default',
    data() {
        return {
            sidebarTriggered: false
        }
    },
    components: {
        NavigationBar,
        NavigationItem,
        NavigationSidebar
    },
    methods: {
        triggerSidebar() {
            this.sidebarTriggered = !this.sidebarTriggered;
        }
    }
}
</script>
