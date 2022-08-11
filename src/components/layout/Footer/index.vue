<script lang="ts" setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const footerMenu = reactive([
    {
        title: 'footer.menu.about',
        submenu: [
            {
                name: 'footer.submenu.careers',
                link: 'https://www.airbnb.cn/careers'
            },
            {
                name: 'footer.submenu.news',
                link: 'https://www.airbnb.cn/press/news'
            },
            {
                name: 'footer.submenu.policy',
                link: 'https://www.airbnb.cn/policies'
            },
            {
                name: 'footer.submenu.accessibility',
                link: 'https://www.airbnb.cn/accessibility'
            }
        ]
    },
    {
        title: 'footer.menu.discover',
        submenu: [
            {
                name: 'footer.submenu.trustAndSafe',
                link: 'https://www.airbnb.cn/trust'
            },
            {
                name: 'footer.submenu.invite',
                link: 'https://www.airbnb.cn/invite?r=6'
            },
            {
                name: 'footer.submenu.evection',
                link: 'https://www.airbnb.cn/work?s=footer'
            },
            {
                name: 'footer.submenu.magzine',
                link: 'https://airbnbmag.com/'
            },
            {
                name: 'footer.submenu.airbnborg',
                link: 'https://www.airbnb.org/?locale=zh'
            }
        ]
    },
    {
        title: 'footer.menu.hosting',
        submenu: [
            {
                name: 'footer.submenu.tryHosting',
                link: 'https://www.airbnb.cn/host/homes?from_footer=1'
            },
            {
                name: 'footer.submenu.hospitality',
                link: 'https://www.airbnb.cn/hospitality'
            },
            {
                name: 'footer.submenu.responsibility',
                link: 'https://www.airbnb.cn/help/responsible-hosting'
            },
            {
                name: 'footer.submenu.experiences',
                link: 'https://www.airbnb.cn/host/experiences?from_footer=1'
            },
            {
                name: 'footer.submenu.resources',
                link: 'https://www.airbnb.cn/resources?traffic_source=footer'
            }
        ]
    },
    {
        title: 'footer.menu.support',
        submenu: [
            {
                name: 'footer.submenu.help',
                link: 'https://www.airbnb.cn/help?from=footer'
            },
            {
                name: 'footer.submenu.neighbors',
                link: 'https://www.airbnb.cn/neighbors'
            }
        ]
    }
])
</script>

<template>
    <div class="footer-common">
        <section class="spikes"></section>
        <ul>
            <li v-for="(item, index) in footerMenu" :key="index">
                <h4>{{ t(item.title) }}</h4>
                <a
                    target="_blank"
                    :href="itemInner.link"
                    v-for="(itemInner, indexInner) in item.submenu"
                    :key="indexInner"
                    >{{ t(itemInner.name) }}</a
                >
            </li>
        </ul>
        <div class="copy-right">@ 2022 Harry, Inc. All rights reserved</div>
    </div>
</template>

<style lang="scss" scoped>
@import 'style';
</style>
