<script lang="ts" setup>
import { useRoomsStore } from '@/stores/rooms'

const roomsStore = useRoomsStore()

function handleChangePage(currentPage: number) {
    roomsStore.getRooms(currentPage)
}
roomsStore.getRooms(1)
</script>

<template>
    <div>
        <aircnc-home-tabs />
        <aircnc-pagination @change-page="handleChangePage" />
    </div>
</template>

<style lang="scss" scoped></style>
