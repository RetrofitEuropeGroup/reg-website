<template>
<main class="font-body">
    <NavigationBar @click="triggerSidebar">
        <nuxt-link to="/">
            <NavigationItem>Home</NavigationItem>
        </nuxt-link>
        <nuxt-link to="/projects">
            <NavigationItem>Projecten</NavigationItem>
        </nuxt-link>
        <!-- <Dropdown>
            <template v-slot:trigger>
               Onze projecten
            </template>
            <template v-slot:content>
                <nuxt-link to="/">
                    <NavigationDropdownItem color="green" :amount="400">
                        <NavigationItem>Ons doel</NavigationItem>
                    </NavigationDropdownItem>
                </nuxt-link>
                <nuxt-link to="/">
                    <NavigationDropdownItem color="green" :amount="500">
                        <NavigationItem>Ons team</NavigationItem>
                    </NavigationDropdownItem>
                </nuxt-link>
                <nuxt-link to="/projects">
                    <NavigationDropdownItem color="green" :amount="600">
                        <NavigationItem>Onze projecten</NavigationItem>
                    </NavigationDropdownItem>
                </nuxt-link>
            </template>
        </Dropdown> -->
        
        <nuxt-link to="/">
            <NavigationItem>Blog</NavigationItem>
        </nuxt-link>
        <nuxt-link to="/">
            <NavigationItem>Partners</NavigationItem>
        </nuxt-link>
    </NavigationBar>
    <Nuxt />
    <transition name="slide">
        <NavigationSidebar @click="triggerSidebar" v-if="sidebarTriggered">
            <nuxt-link to="/">
                <NavigationItem @click="triggerSidebar">Home</NavigationItem>
            </nuxt-link>
            <nuxt-link to="/about">
                <NavigationItem @click="triggerSidebar">Over ons</NavigationItem>
            </nuxt-link>
            <nuxt-link to="/projects">
                <NavigationItem @click="triggerSidebar">Projecten</NavigationItem>
            </nuxt-link>
        </NavigationSidebar>
    </transition>
</main>
</template>

<script>
import Dropdown from '../components/base/Dropdown';
import NavigationBar from '../components/navigation/NavigationBar';
import NavigationItem from '../components/navigation/NavigationItem';
import NavigationDropdownItem from '../components/navigation/NavigationDropdownItem';
import NavigationSidebar from '../components/navigation/NavigationSidebar';

export default {
    name: 'default',
    data() {
        return {
            sidebarTriggered: false
        }
    },
    components: {
        Dropdown,
        NavigationBar,
        NavigationItem,
        NavigationDropdownItem,
        NavigationSidebar
    },
    methods: {
        triggerSidebar() {
            this.sidebarTriggered = !this.sidebarTriggered;
        }
    }
}
</script>
