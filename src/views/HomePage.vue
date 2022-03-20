<template>
  <div>
    <Home id="Home" />
    <Madmanga id="Madmanga" />
    <Story id="Story" />
    <Evolution id="Evolution" />
    <Thunder id="Thunder" />
    <Box />
    <RoadMap id="RoadMap" />
    <QA id="QA" />
    <WhoWeAre id="WhoWeAre" />
  </div>
</template>
<script>
  import Home from '@/components/Home/Home';
  import Story from "@/components/Home/Story"
  import Evolution from "@/components/Home/Evolution"
  import About from "@/components/Home/About";
  import Brand from '@/components/Home/Brand';
  import QA from '@/components/Home/QA';
  import Box from '@/components/Home/Box'
  import Thunder from '@/components/Home/Thunder';
  import Madmanga from '@/components/Home/Madmanga'
  import RoadMap from '@/components/Home/RoadMap'
  import WhoWeAre from '@/components/Home/WhoWeAre'
  export default {
    name: 'HomePage',
    components: {
      Home,
      Story,
      Evolution,
      Thunder,
      About,
      Brand,
      QA,
      Box,
      Madmanga,
      RoadMap,
      WhoWeAre
    }
  }
</script>