<!--
 created by chimy 
测试
-->
<template>
  <article class="page">
    <section>
      <h3>插槽内容</h3>
      <section>
        <Slot1 url="/profile"> </Slot1>
        <br />
        <Slot1 url="/profile">
          Your Profile
        </Slot1>
        <br />
        <Slot1 url="/profile">
          <button>hahah</button>
          Your Profile
        </Slot1>
      </section>
      <hr />
    </section>
    <section>
      <h3>编译作用域</h3>
      <p>父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。</p>
      <section>
        <Slot2 url="/profile">
          {{ user.name }}
        </Slot2>
      </section>
      <hr />
    </section>
    <section>
      <h3>后备内容</h3>

      <hr />
    </section>
    <section>
      <h3>具名插槽</h3>
      <section>
        <Slot3>
          <template v-slot:header>
            <h1>Here might be a page title</h1>
          </template>

          <p>A paragraph for the main content.</p>
          <p>And another one.</p>

          <template v-slot:footer>
            <p>Here's some contact info</p>
          </template>
        </Slot3>
      </section>
      <hr />
    </section>
    <section>
      <h3>作用域插槽</h3>
      <section>
        <Slot4>
          <template v-slot:default="hhh">
            <div>
              {{ hhh.user.name }}
            </div>
          </template>
        </Slot4>
        <br />
        <!-- <Slot4>
          <template v-slot="slotProps">
            <div>
              {{ slotProps.user.name }}
            </div>
          </template>
        </Slot4> -->
        <Slot4>
          <template v-slot:default="slotProps">
            <div>
              {{ slotProps.user.name }}
            </div>
          </template>
          <template v-slot:other="slotProps">
            <div>
              {{ slotProps.user2.name }}
            </div>
          </template>
        </Slot4>
        <br />
        <Slot4>
          <template v-slot:default="{ user }">
            <div>
              {{ user.name }}
            </div>
          </template>
          <template v-slot:other="{ user2 }">
            <div>
              {{ user2.name }}
            </div>
          </template>
        </Slot4>
      </section>
      <hr />
    </section>
    <section>
      <h3>动态插槽名</h3>

      <hr />
    </section>
    <section>
      <h3>具名插槽的缩写</h3>
      <section>
        <Slot3>
          <template #header>
            <h1>Here might be a page title</h1>
          </template>

          <p>A paragraph for the main content.</p>
          <p>And another one.</p>

          <template #footer>
            <p>Here's some contact info</p>
          </template>
        </Slot3>
      </section>
      <hr />
    </section>
    <section>
      <h3>其它示例</h3>

      <hr />
    </section>
    <section>
      <h3>废弃了的语法</h3>
      <section>
        <Slot4>
          <template slot-scope="hhh">
            <div>
              {{ hhh.user.name }}
            </div>
          </template>
        </Slot4>
      </section>

      <hr />
    </section>
  </article>
</template>
<script>
import Slot1 from './slot/Slot1'
import Slot2 from './slot/Slot2'
import Slot3 from './slot/Slot3'
import Slot4 from './slot/Slot4'

export default {
  data() {
    return {
      user: {
        name: 'parent'
      }
    }
  },
  methods: {},
  computed: {},
  mounted() {},
  components: {
    Slot1,
    Slot3,
    Slot4,
    Slot2
  }
}
</script>
<style lang="less" scoped></style>
