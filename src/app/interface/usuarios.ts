export interface Usuarios {
    nombre: string | null;
    email: string | null;
    password: string | null;
    perfil: string;
    uid: string | null;
  }

  interface UserData {
    nombre: string;
    email: string;
    password: string;
    rol: string;
    uid: string;
  }