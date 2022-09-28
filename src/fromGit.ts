type FIXME = Order['state'];


type Sum = {
  sum: number;
};

type WorkerId = Sum & { workerId: number };
type SuppliesSum = WorkerId & { suppliesSum: number };
type ProduceEstimate = SuppliesSum & { produceEstimate: Date };
type FullfillmentDate = ProduceEstimate & { fullfillmentDate: Date };

type Order =
  | {
      state: 'initial';
      initial: Sum;
    }
  | {
      state: 'inWork';
      inWork: WorkerId;
    }
  | {
      state: 'buyingSupplies';
      buyingSupplies: SuppliesSum;
    }
  | {
      state: 'producing';
      producing: ProduceEstimate;
    }
  | {
      state: 'fullfilled';
      fullfilled: FullfillmentDate;
    };

export const getOrderState = (order: Order): FIXME => order.state;
