<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h4 class="display-1 font-weight-bold mb-3">Paste the text below:</h4>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="2" xs="2"></v-col>
      <v-col cols="8" xs="8">
        <v-textarea outlined name="input-7-4" :value="initial"></v-textarea>
      </v-col>
      <v-col cols="2" xs="2"></v-col>
    </v-row>

    <v-row class="text-center">
      <v-col>
        <h4>Bulleted! ✨ See results below:</h4>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col>
        <div>{{ bulletted }}</div>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col
        ><v-btn class="mb-4" depressed color="primary"
          >Copy to Clipboard!</v-btn
        ></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    initial: 'Hi',
    bulletted: 'Result',
  }),
}
</script>
