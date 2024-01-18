import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";
import EditorLayout from "./EditorLayout";

const isAdmin = window.location.pathname.startsWith("/admin");
console.log(window.location);

const isEditor = window.location.pathname.startsWith("/editor");
console.log(window.location);

//  export const Layout = isAdmin ? AdminLayout : MainLayout;
 export const Layout = isAdmin ? AdminLayout : MainLayout;