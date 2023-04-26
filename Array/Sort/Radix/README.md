# Radix sort

It sorts the elements by first grouping the elements of the same place value. Then, sort the elements according to their increasing/decreasing order.

![Image](../../_asset_/Radix-sort-0.png)

- Find the `max` element in the array. In this array 788 is the largest number. Therefore, the loop should go up to hundreds place (3 times).

- Now, go through each place one by one. Use any stable sorting technique to sort the digits. We have used counting sort for this.
  ![Image](../../_asset_/Radix-sort-1.png)

- Now, sort the elements based on digits at tens place.
  ![Image](../../_asset_/Radix-sort-2.png)

- Finally, sort the elements based on the digits at hundreds place.
  ![Image](../../_asset_/Radix-sort-3.png)

- Time Complexity : O(n + max)

- Space Complexity : O(max)
