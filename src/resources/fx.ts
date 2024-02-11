import { ApiClient } from "../apiClient";
import { FxBody, TransactionModel } from "../types";

/**
 * Represents a class for handling foreign exchange operations.
 */
export class Fx {
  #client: ApiClient;

  /**
   * Creates an instance of the Fx class.
   * @param client The API client used for making requests.
   */
  constructor(client: ApiClient) {
    this.#client = client;
  }

  /**
   * Retrieves the exchange rate for the specified currency pair.
   * @param body The request body containing the currency pair.
   * @returns A promise that resolves to the exchange rate.
   */
  async rate(body: FxBody) {
    return this.#client.post({
      path: `/fx/rate`,
      body: body,
    });
  }

  /**
   * Performs a currency exchange operation.
   * @param body The request body containing the exchange details.
   * @returns A promise that resolves to the transaction model.
   */
  async exchange(body: FxBody): Promise<TransactionModel> {
    return this.#client.post({
      path: `/fx/exchange`,
      body: body,
    });
  }
}
