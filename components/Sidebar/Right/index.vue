<template>
  <div class="flex flex-col">
    <!--  Search  bar-->
    <div class="relative m-2">
      <div
        class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer"
      >
        <div class="w-6 h-6 mr-2">
          <MagnifyingGlassIcon @click="handleSearch" />
        </div>
      </div>
      <input
        v-model="search"
        type="text"
        placeholder="Search twitter"
        class="flex items-center text-black w-full pl-12 text-sm font-normal dark:text-gray-100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border-blue-200 h-9"
      />
    </div>

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
        <div class="flex flex-row items-center justify-between p-2">
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
            <button
              class="text-white rounded-full bg-blue-400 dark:bg-white dark:text-black text-xs px-4 font-bold py-2"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <!--  Footer -->
    <footer>
      <ul class="mx-2 my-4 text-xs text-gray-500">
        <li class="inline-block mx-2">
          <a href="" class="hover:underline" @click.prevent ="handleTogleDarkMode"> Dark Mode</a>
        </li>
        <li class="inline-block mx-2">
          <a href="" class="hover:underline"> Privacy Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="" class="hover:underline"> Cookie Policy</a>
        </li>
        <li class="inline-block mx-2">
          <a href="" class="hover:underline"> Accessability</a>
        </li>
        <li class="inline-block mx-2">
          <a href="" class="hover:underline"> Ads info</a>
        </li>
        <li class="inline-block mx-2">
          <a href="" class="hover:underline"> More</a>
        </li>
         
      </ul>
    </footer>
  </div>
</template>
<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
const search = ref("");
const emitter = useEmitter()
const whatsHappening = ref([
  { title: "spaceX", count: "18.8k Tweets" },
  { title: "#CodingIsFun", count: "1.8k Tweets" },
  { title: "#NotFarFromHere", count: "5.8k Tweets" },
]);
const whoToFollow = ref([
  { name: "Alex H", handle: "@alexH", image: "https://picsum.photos/200/200" },
  {
    name: "Kamil M",
    handle: "@kamilM",
    image: "https://picsum.photos/200/200",
  },
  { name: "MatyP", handle: "@matyP", image: "https://picsum.photos/200/200" },
]);

function handleSearch() {
  useRouter().push({
    path: "/search",
    query: {
      q: search.value,
    },
  });
}
 function handleTogleDarkMode () {
  emitter.$emit('toggleDarkMode')
 }

</script>
