# Bucket sort

It divides the unsorted array elements into several groups called buckets. Each bucket is then sorted by using any of the suitable sorting algorithms or recursively applying the same bucket algorithm.

#### Scatter Gather Approach

The process of bucket sort can be understood as a scatter-gather approach. Here, elements are first scattered into buckets then the elements in each bucket are sorted. Finally, the elements are gathered in order.

![Image](../../Img/Scatter-Gather-Approach.png)

#### Working

- Create an array of size 10. Each slot of this array is used as a bucket for storing elements.
  ![Image](../../Img/Bucket-sort-0.png)
  ![Image](../../Img/Bucket-sort-1.png)

- Insert elements according to the range of the bucket.
  ![Image](../../Img/Bucket-sort-2.png)

- The elements of each bucket are sorted using any of the stable sorting algorithms. Here, we have used inbuilt `sort()` function.
  ![Image](../../Img/Bucket-sort-3.png)

- bucket are gathered by iterating through the bucket and inserting every element into the original array in each cycle.
  ![Image](../../Img/Bucket-sort-4.png)

- Time Complexity : O(n<sup>2</sup>)

- Space Complexity : O(n + size)
