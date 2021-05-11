<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="ice-dialog-overlay" @click="onCloseOnClickOverlay"></div>
      <div class="ice-dialog-wrapper">
        <div class="ice-dialog">
          <header>
            <slot name="title" />
            <span class="ice-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button level="primary" @click="onConfirm">确定</Button>
            <Button @click="onCancel">取消</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    confirm: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  components: { Button },
  setup (props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const onCloseOnClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const onConfirm = () => {
      if (props.confirm?.()) {
        close();
      }
    };
    const onCancel = () => {
      props.cancel?.()
      close()
    }
    return { close, onCloseOnClickOverlay, onConfirm, onCancel };
  }
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.ice-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade-out(#000, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: solid 1px $border-color;
    padding: 12px 16px;
    text-align: right;
    > button:first-child {margin-right: 20px;}
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before, &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: #000;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
