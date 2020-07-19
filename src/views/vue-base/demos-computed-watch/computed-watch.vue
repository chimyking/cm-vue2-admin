<!--
 created by chimy 
-->
<template>
  <article>
    <section>
      <head>
        computed:例1
      </head>
      <section>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
      </section>
    </section>
    <section>
      <head>
        computed:例2
      </head>
      <section>
        <div>{{ fullName }}</div>
        <div>{{ fullName2 }}</div>
      </section>
    </section>
    <section>
      <head>
        watch:例1
      </head>
      <section>
        <div>
          <p>
            Ask a yes/no question:
            <input v-model="question" />
          </p>
          <p>{{ answer }}</p>
        </div>
      </section>
    </section>
  </article>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello',
      firstName: 'Foo',
      lastName: 'Bar',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  methods: {},
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
    }
  },
  computed: {
    reversedMessage() {
      return this.message
        .split('')
        .reverse()
        .join('')
    },
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    fullName2: {
      set(newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      },
      get() {
        return this.firstName + ' ' + this.lastName
      }
    }
  },
  mounted() {},
  components: {}
}
</script>
<style lang="less" scoped></style>
