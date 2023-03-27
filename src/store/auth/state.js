import { LocalStorage } from "quasar";
export default function () {
  return {
    isAuthenticated: LocalStorage.getItem("isAuthenticated") || false,
  };
}
