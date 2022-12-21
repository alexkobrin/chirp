<template>
  <div class="flex flex-col">
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="(item, idx) in whatsHappening"
        :key="idx"
      >
        <div class="">
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ item.title }}
          </h2>
          <p class="text-xs text-gray-400">
            {{ item.count }}
          </p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem
        v-for="(item, idx) in whoToFollow"
        :key="idx"
      >
        <div class="flex flex-row  items-center justify-between p-2">
          <div class="flex items-center gap-3">
            <img
              :src="item.image"
              class="w-10 h-10 rounded-full"
              :alt="item.name"
            />
            <div class>
              <h2 class="font-bold text-gray-900 text-sm dark:text-white">
                {{ item.name }}
              </h2>
              <p class="text-xs text-gray-400">{{ item.handle }}</p>
            </div>
          </div>
          <div class="">
            <button class="text-white rounded-full bg-blue-400 dark:bg-white dark:text-black text-xs px-4 font-bold py-2">Follow</button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>
<script setup>
const whatsHappening = ref([
  { title: "spaceX", count: "18.8k Tweets" },
  { title: "#CodingIsFun", count: "1.8k Tweets" },
  { title: "#NotFarFromHere", count: "5.8k Tweets" },
]);
const whoToFollow = ref([
  { name: "Alex H", handle: "@alexH", image: "https://picsum.photos/200/200" },
  { name: "Kamil M", handle: "@kamilM", image: "https://picsum.photos/200/200" },
  { name: "MatyP", handle: "@matyP", image: "https://picsum.photos/200/200" },
]);
</script>
