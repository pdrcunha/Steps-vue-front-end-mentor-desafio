<script setup>
import { ref, provide } from 'vue';
import Container1 from './components/Container1.vue';
import Container2 from './components/Container2.vue';
import Container3 from './components/Container3.vue';
import Container4 from './components/Container4.vue';
import Container5 from './components/Container5.vue';
import Steps from './components/Steps.vue';



const container = ref('Container1');

const form = ref({
  persona: {
    name: null,
    email: "",
    phone: "",
  },
  plan: {
    type: "",
    time: "",
    price: "",
  },
  addOns: [],
  total: 0,
  errors:{
    erroName: null,
    erroEmail: null,
    erroPhone: null,
    erroType: null,
  }
})

provide("form", form);

function conferInputs(params,valor) {
    !params.persona.name ? params.errors.erroName = true : params.errors.erroName = null;
    !params.persona.email ? params.errors.erroEmail = true : params.errors.erroEmail = null;
    !params.persona.phone ? params.errors.erroPhone = true : params.errors.erroPhone = null;
    !params.plan.type ? params.errors.erroType = true : params.errors.erroType = null;

    if(params.persona.name && params.persona.email && params.persona.phone ){
        
        return true;
    }
   
    return false;
    
}

function changeContainer(valor) {
  if(conferInputs(form.value,valor)){
    container.value = valor;
  }
  
}


</script>

<template>
  <main>
    <div class="container">
      <div class="left">
        <Steps number="1" :checked="container === 'Container1'" titulo="YOUR INFO"
          @click="changeContainer('Container1')" />
        <Steps number="2" :checked="container === 'Container2'" titulo="SELECT PLAN"
          @click="changeContainer('Container2')" />
        <Steps number="3" :checked="container === 'Container3'" titulo="ADD-ONS"
          @click="changeContainer('Container3')" />
        <Steps number="4" :checked="container === 'Container4'" titulo="SUMMARY"
          @click="changeContainer('Container4')" />
      </div>
      <div class="right">

        <Container1 v-if="container === 'Container1'" @nextContainer="changeContainer" @backContainer="changeContainer" />
        <Container2 v-if="container === 'Container2'" @nextContainer="changeContainer" @backContainer="changeContainer" />
        <Container3 v-if="container === 'Container3'" @nextContainer="changeContainer" @backContainer="changeContainer" />
        <Container4 v-if="container === 'Container4'" @concluir="changeContainer" @backContainer="changeContainer"
          @backContainer2="changeContainer" />
        <Container5 v-if="container === 'Container5'" @nextContainer="changeContainer" @backContainer="changeContainer" />

      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: rgb(197, 242, 227);
  width: 100vw;
  height: 100vh;
  position: relative;
}

.container {
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  padding: 16px;
  border-radius: 20px;
  width: 750px;
  height: 560px;
  background-color: #ffff;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 400px;
  }
}

.left {
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-top: 32px;
  gap: 32px;
  background-image: url('./assets/images/bg-sidebar-desktop.svg');
  border-radius: 20px;

  @media only screen and (max-width: 768px) {
    padding-left: 8px;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    background-image: url('./assets/images/bg-sidebar-mobile.svg');
    height: 200px;  
    background-repeat: no-repeat;
  background-size: cover;
  }
}

.right {
  height: 100%;
  display: contents;
  @media only screen and (max-width: 768px) {
    padding: 8px;
    height:600px;
    z-index: 2;
    position: relative;
    top: 0px;
   
  }
}

.container-inputs {
  @media only screen and (max-width: 768px) {
    z-index: 2;
    padding: 8px 16px;
    background-color: white;
    border-radius: 15px;
    position: absolute;
    right: 50%;
    top: 190px;
    width: 300px;
    transform: translateX(50%);
    min-height: 400px;
  }
}
</style>
