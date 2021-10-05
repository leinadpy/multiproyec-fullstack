export interface IAbAlpha {
  selAbertura: string;
  cantidad: number;
  ancho: number;
  alto: number;
  altofijo?: number;
  selPremarco?: string;
  selContramarco?: string;
  selColorAluminio?: string;
  selColorVidrio?: string;
  proveedorVidrio?: string;
  selEspesorVidrio?: string;
  selColorAccesorio?: string;
  selCierre?: string;
  selRefuerzo?: string;
  pesoHoja?: string;
  precioxkg?: number;
  parametro?: number;
  solera?: number;
  costo?: number;
}

export interface IAbertura {
  item: string;
  cantidad: number;
  descripcion: string;
  precioUnitario: number;
}

export interface IAbServicio {
  codServicio: string;
  cantidad: number;
  ancho: number;
  alto: number;
  proveedor: string;
  costo?: number;
}

export interface IAbTemplado {
  selAbertura: string;
  cantidad: number;
  ancho: number;
  ancho2?: number;
  alto: number;
  altofijoinf?: number;
  altofijosup?: number;
  anchofijolat1?: number;
  anchofijolat2?: number;
  tipoEspejo?: string;
  tipoCierre?: string;
  tipoBrazo?: string;
  selColorAluminio?: string;
  proveedoraluminio?: string;
  tipoManiijon?: string;
  colorvidrio?: string;
  proveedorvidrio?: string;
  espesorvidrio?: string;
  coloraccesorio?: string;
  proveedoraccesorio?: string;
  cierreopc?: string;
  costo?: number;
  parametro?: number;
  pesoHoja?: number;
  embutido?: string;
  arenado?: string;
  plastificado?: string;
  proveedorarenado?: string;
  biselado?: string;
}

export interface IAccesorio {
  codigo: string;
  descripcion: string;
  linea: string;
  color: string;
  proveedor: string;
  precio: number;
  fechaVigente: string;
}

export interface ICliente {
  denomination: string;
  nombre: string;
  direccion?: string;
  telefono?: string;
  email?: string;
  atencion?: string;
}

export interface IMOD {
  codigo: string;
  descripcion: string;
  unidad: string;
  precio: number;
  fechaVigente: string;
}

export interface IPerfil {
  codigo: string;
  descripcion: string;
  linea: string;
  pesoPorMetro: number;
  longitudBarra: number;
  color: string;
  proveedor: string;
  precioPorBarra: number;
  fechaVigente: string;
}

export interface IPerfilxkg {
  proveedor: string;
  linea: string;
  color: string;
  precioxkg: number;
  fechaVigente: string;
}

export interface IPresupuesto {
  nropresupuesto: string;
  fecha: string;
  referencia: string;
  cliente: string;
  atencion?: string;
  titulo?: string;
  aberturas: Array<string>;
  observaciones: string;
  total?: number;
  plazoEntrega?: string;
  vendedor: string;
  formaPago: string;
  oferta: string;
  factor: number;
  tasaCambio: number;
  comisionCliente: { type: number; default: 1 };
}

export interface IServicio {
  codigo: string;
  descripcion: string;
  proveedor: string;
  precio: number;
  fechaVigente: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IVendedor {
  nombre: string;
  email: string;
  iniciales: string;
  telefono?: string;
}

export interface IVidrio {
  codigo: string;
  descripcion: string;
  espesor: number;
  color: string;
  proveedor: string;
  precio: number;
  fechaVigente: string;
}