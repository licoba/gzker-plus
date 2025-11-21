import { watch } from 'vue';

import { useStorageStore } from '@/stores/storage';
import { ThemeMode } from '@/constants';

/**
 * 应用主题
 */
function applyTheme(mode: ThemeMode) {
  if (mode === ThemeMode.Dark) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

/**
 * 初始化主题
 */
export function useTheme() {
  const storageStore = useStorageStore();

  // 监听主题变化
  watch(
    () => storageStore.options?.theme?.mode,
    (newMode) => {
      if (newMode) {
        applyTheme(newMode);
      }
    },
    { immediate: true },
  );
}
