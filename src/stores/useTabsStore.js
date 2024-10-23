import { create } from 'zustand';

const useTabsStore = create((set) => ({
  activeTab: 'inicio',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useTabsStore;