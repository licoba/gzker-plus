<script setup lang="ts">
import { computed } from 'vue';

import { t } from '@/i18n';
import { ThemeMode } from '@/constants';

import type { OptionsKey } from '@/constants';
import type { CheckItem, SettingProps } from '@/types';

defineProps<SettingProps<OptionsKey.Theme>>();

const themeModeList = computed<CheckItem<ThemeMode>[]>(() => {
  return [
    {
      value: ThemeMode.Light,
      label: t('basicSetting.theme.mode.light'),
    },
    {
      value: ThemeMode.Dark,
      label: t('basicSetting.theme.mode.dark'),
    },
  ];
});
</script>

<template>
  <ElSelect v-model="settings.mode" class="theme-mode-select">
    <ElOption v-for="item in themeModeList" :key="item.value" :value="item.value" :label="item.label" />
  </ElSelect>
</template>

<style lang="scss" scoped>
.theme-mode-select {
  width: 130px;
}
</style>
