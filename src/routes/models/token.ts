export interface TransmittedData {
  id: string;
  data: {
    fullName: string;
    idNumber: string;
    creditCard: string;
  };
}

export interface DetokenizeResponse {
  id: string;
  data: {
    fullName: DetokenizeData;
    idNumber: DetokenizeData;
    creditCard: DetokenizeData;
  };
}

export interface DetokenizeData {
  found: boolean;
  value: string;
}
