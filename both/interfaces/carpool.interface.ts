export interface Carpool {
  	_id?: string;
  	Time: string; 
	From: string; 
	To: string;
	Provider: string;
	Contact : string;
	owner?: string;
	public: boolean;
	invited?: string[];
}