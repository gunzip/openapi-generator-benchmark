import { NewModel } from "./NewModel";

 /**
 * @description Created
*/
export type TestParameterWithBodyReference201 = any;
/**
 * @description Fatal error
*/
export type TestParameterWithBodyReference500 = any;
export type TestParameterWithBodyReferenceMutationRequest = NewModel;
export type TestParameterWithBodyReferenceMutationResponse = any;
export type TestParameterWithBodyReferenceMutation = {
    Response: TestParameterWithBodyReferenceMutationResponse;
    Request: TestParameterWithBodyReferenceMutationRequest;
    Errors: TestParameterWithBodyReference500;
};