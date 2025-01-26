import { signal } from "@preact/signals";

const isChecked = signal(false);

const state = {
    isChecked
};

export const useUI = () => state;