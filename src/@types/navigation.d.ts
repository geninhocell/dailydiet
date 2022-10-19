export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      meal: { daily: string; mean: string };
      new: { daily: string; mean: string } | undefined;
      createMeanDone: { inside_the_diet: boolean };
    }
  }
}
