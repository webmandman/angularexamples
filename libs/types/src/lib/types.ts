export interface SmartyResponse {
  analysis: Record<string, unknown>;
  components: Record<string, unknown>;
}
export interface Address {
    address: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
    lat?: number;
    lng?: number;
}
