const express = require("express");
const cors = require("cors");

const App = express();
App.use(cors());

const SortingAlgorithms = {
  InsertionSort: {
    theory: `
Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It works by 
picking an element from the unsorted portion and inserting it into the correct position in the already sorted portion of the array.

Time Complexity:
	•	Best case: O(n) (when the array is already sorted)
	•	Worst and average case: O(n²) (when the array is reversed or randomly ordered)`,

    working: `

Insertion Sort builds the sorted array one element at a time by picking elements from the unsorted portion and 
inserting them into the correct position in the sorted portion.

Example:
Consider the array [5, 3, 8, 4, 2].

Step-by-Step Process:

	1.	Start from the second element (since the first element is trivially sorted).

	•	Current element: 3
	•	Compare 3 with the element before it (5).
	•	Since 5 is greater than 3, move 5 to the right.
	•	Insert 3 in the first position.

Array after step 1: [3, 5, 8, 4, 2]

	2.	Next element: 8

	•	Compare 8 with 5. Since 8 > 5, no shift is needed.
	•	Insert 8 at its current position.

Array after step 2: [3, 5, 8, 4, 2]

	3.	Next element: 4

	•	Compare 4 with 8. Since 4 < 8, shift 8 to the right.
	•	Compare 4 with 5. Since 4 < 5, shift 5 to the right.
	•	Insert 4 at the correct position.

Array after step 3: [3, 4, 5, 8, 2]

	4.	Next element: 2

	•	Compare 2 with 8, shift 8 to the right.
	•	Compare 2 with 5, shift 5 to the right.
	•	Compare 2 with 4, shift 4 to the right.
	•	Compare 2 with 3, shift 3 to the right.
	•	Insert 2 at the correct position.
    
Array after step 4: [2, 3, 4, 5, 8]}`,

    code: {
      c: `
#include <stdio.h>

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
}

int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, n);
    printArray(arr, n);
    return 0;
}
            `,
      "c++": `
#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, n);
    printArray(arr, n);
    return 0;
}
            `,
      java: `
class InsertionSort {
    static void insertionSort(int arr[]) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i], j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    static void printArray(int arr[]) {
        for (int num : arr) System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String args[]) {
        int arr[] = {5, 3, 8, 4, 2};
        insertionSort(arr);
        printArray(arr);
    }
}
            `,
      python: `
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

arr = [5, 3, 8, 4, 2]
insertion_sort(arr)
print("Sorted array:", arr)
            `,
    },
    TASC:`
Time Complexity Analysis

    •	Best Case (Already Sorted): O(n)
        • If the array is already sorted, Insertion Sort will only compare each element once, requiring linear time.
    •	Worst Case (Reverse Sorted): O(n²)
        • In the worst case, when the array is sorted in reverse order, each element will be compared with every other element before it, leading to quadratic time complexity.
    •	Average Case: O(n²)
        • On average, Insertion Sort will make quadratic comparisons and swaps as it builds the sorted array one element at a time.

Space Complexity Analysis

	•	Auxiliary Space Complexity: O(1)
        • Insertion Sort is in-place, meaning it does not require any extra storage apart from the input array.

In-Place or Not?
	•	Yes, Insertion Sort is in-place because it sorts the array by modifying the array itself without using additional space.
    `,
    Video:"YpZUgiT1N94"
  },

  SelectionSort: {
    theory: `
Selection Sort is a simple comparison-based sorting algorithm. It works by selecting the smallest element from the unsorted part and swapping it with the first unsorted element. This process is repeated until the entire array is sorted.
      `,

    working: `

Steps:
    1. Find the minimum element in the unsorted part of the array.
    2. Swap it with the first unsorted element.
    3. Move the boundary between sorted and unsorted parts.
    4. Repeat until the entire array is sorted.

    Example:
    Given an array: [64, 25, 12, 22, 11]

    Step 1: Find the smallest element and swap with the first element
        [11, 25, 12, 22, 64]
        
    Step 2: Find the next smallest element and swap with the second element
        [11, 12, 25, 22, 64]
        
    Step 3: Find the next smallest element and swap with the third element
        [11, 12, 22, 25, 64]

    Step 4: Find the next smallest element and swap with the fourth element
        [11, 12, 22, 25, 64]
        
        Step 5: Array is sorted.`,

    code: {
      c: `
// C implementation
#include <stdio.h>

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}
`,
      "c++": `
// C++ implementation
#include <iostream>
using namespace std;

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        swap(arr[i], arr[minIndex]);
    }
}
`,
      java: `
// Java implementation
class SelectionSort {
    static void selectionSort(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) minIndex = j;
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
}
`,
      python: `
# Python implementation
def selection_sort(arr):
    for i in range(len(arr) - 1):
        min_index = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
`,
    },

    TASC: `
Time Complexity Analysis

Best Case (Already Sorted): O(n^2)
    - Even if the array is sorted, it still makes O(n^2) comparisons.

Worst Case (Reverse Sorted): O(n^2)
    - It always makes O(n^2) comparisons, regardless of order.

Average Case: O(n^2)
    - It always performs the same number of operations.

Space Complexity Analysis

Auxiliary Space Complexity: O(1)
    - No extra space is used apart from temporary variables.

In-Place or Not?
    - Selection Sort is an in-place sorting algorithm (modifies the original array).

Stable or Not?
    - Selection Sort is NOT stable as it may swap equal elements and change their order.
    `,
    Video:"9_B6TmAHveU"
  },
  MergeSort: {
    theory: `
Merge Sort is a divide-and-conquer algorithm that recursively splits an array into two halves, sorts them separately, and then merges them back together in a sorted order. It follows these steps:
    
    1.	Divide: The array is recursively divided into two halves until each subarray has only one element.
    2.	Conquer: The individual subarrays are already sorted (single-element arrays).
    3.	Merge: The two sorted subarrays are merged together in a sorted manner.
    `,

    working: `
1. Divide the array into two halves recursively.
2. Sort each half.
3. Merge the two sorted halves back together.
        
    Example:

        Consider an array:
        [8, 3, 5, 4, 2, 7, 6, 1]

            1.	Step 1: Split the Array

            •	[8, 3, 5, 4] and [2, 7, 6, 1]
            •	[8, 3] and [5, 4], [2, 7] and [6, 1]
            •	[8], [3], [5], [4], [2], [7], [6], [1] (Single elements)

            2.	Step 2: Merge Sorted Sublists

            •	Merge [8] and [3] → [3, 8]
            •	Merge [5] and [4] → [4, 5]
            •	Merge [3, 8] and [4, 5] → [3, 4, 5, 8]
            •	Merge [2] and [7] → [2, 7]
            •	Merge [6] and [1] → [1, 6]
            •	Merge [2, 7] and [1, 6] → [1, 2, 6, 7]

            3.	Step 3: Merge Final Halves

            •	Merge [3, 4, 5, 8] and [1, 2, 6, 7]
            •	Final sorted array: [1, 2, 3, 4, 5, 6, 7, 8]

        `,

    code: {
      c: `
#include <stdio.h>

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int L[n1], R[n2];

    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }

    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
`,

      cpp: `
#include <iostream>
using namespace std;

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int L[n1], R[n2];

    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }

    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
`,

      java: `
class MergeSort {
    static void mergeSort(int arr[], int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    static void merge(int arr[], int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int L[] = new int[n1];
        int R[] = new int[n2];

        for (int i = 0; i < n1; i++) L[i] = arr[left + i];
        for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }
}
`,

      python: `
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left = arr[:mid]
        right = arr[mid:]

        merge_sort(left)
        merge_sort(right)

        i = j = k = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1
            k += 1

        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1
`,
    },

    TASC: `
Time Complexity Analysis

Best Case (Already Sorted): O(n log n)
    • Even if the array is already sorted, Merge Sort will still divide and merge it.

Worst Case (Reverse Sorted): O(n log n)
    • The number of comparisons remains the same regardless of order.

Average Case: O(n log n)
    • The recursive splitting results in log(n) levels, and merging each level takes O(n) time.

Thus, the total time complexity:
O(n log n)

Space Complexity Analysis

Auxiliary Space Complexity: O(n)
    • Unlike Quick Sort, which sorts in-place, Merge Sort requires additional space for merging.
    `,
    Video:"86HOPLCgc00"
},
  BubbleSort: {
    theory:
`
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the entire list is sorted. The algorithm gets its name because smaller elements 'bubble' to the top of the list, while larger elements sink to the bottom with each iteration.
`,

    working: `
    Consider an example array: [5, 3, 8, 4, 2]

    **Step 1: First pass**
    - Compare 5 and 3 → Swap → [3, 5, 8, 4, 2]
    - Compare 5 and 8 → No Swap → [3, 5, 8, 4, 2]
    - Compare 8 and 4 → Swap → [3, 5, 4, 8, 2]
    - Compare 8 and 2 → Swap → [3, 5, 4, 2, 8] (Largest element is in place)

    **Step 2: Second pass**
    - Compare 3 and 5 → No Swap → [3, 5, 4, 2, 8]
    - Compare 5 and 4 → Swap → [3, 4, 5, 2, 8]
    - Compare 5 and 2 → Swap → [3, 4, 2, 5, 8] (Second largest element in place)

    **Step 3: Third pass**
    - Compare 3 and 4 → No Swap → [3, 4, 2, 5, 8]
    - Compare 4 and 2 → Swap → [3, 2, 4, 5, 8] (Third largest element in place)

    **Step 4: Fourth pass**
    - Compare 3 and 2 → Swap → [2, 3, 4, 5, 8] (Sorted array)
    `,

    code: {
        c: `
#include <stdio.h>

// Function to perform Bubble Sort
void bubbleSort(int arr[], int n) {
    int i, j, temp;
    int swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = 0;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        if (swapped == 0) break;
    }
}

// Function to print an array
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

// Driver code
int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    bubbleSort(arr, n);
    printf("Sorted array: ");
    printArray(arr, n);
    
    return 0;
}
        `,

        "c++": `
#include <iostream>
using namespace std;

// Function to perform Bubble Sort
void bubbleSort(int arr[], int n) {
    bool swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

// Function to print an array
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Driver code
int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    bubbleSort(arr, n);
    cout << "Sorted array: ";
    printArray(arr, n);
    
    return 0;
}
        `,

        java: `
class BubbleSort {
    // Function to perform Bubble Sort
    static void bubbleSort(int arr[]) {
        int n = arr.length;
        boolean swapped;
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }

    // Function to print an array
    static void printArray(int arr[]) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Driver code
    public static void main(String args[]) {
        int arr[] = {5, 3, 8, 4, 2};
        
        bubbleSort(arr);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}
`,

        python: `
# Function to perform Bubble Sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break

# Function to print an array
def print_array(arr):
    print(" ".join(map(str, arr)))

# Driver code
arr = [5, 3, 8, 4, 2]
bubble_sort(arr)
print("Sorted array:")
print_array(arr)
        `,
    },

    TASC: `
Time Complexity Analysis

Best Case (Already Sorted): O(n)
	• If the array is already sorted, Bubble Sort will only go through the array once without making any swaps.

Worst Case (Reverse Sorted): O(n²)
	• In the worst case, every element is compared and swapped in each iteration.

Average Case: O(n²)
	• The overall performance remains O(n²) due to repeated comparisons and swaps.

Space Complexity Analysis

Auxiliary Space Complexity: O(1)
	• Bubble Sort is **in-place**, meaning it does not require extra space apart from the input array.

In-Place or Not?
	• Yes, Bubble Sort is **in-place** because all swaps are done within the same array.
    `,
    Video:"V3vM_m2iFtk"
  }
};

App.listen(4000, () => {
  console.log("I am listening");
});
App.get("/BubbleSort", (req, res) => {
  res.json(SortingAlgorithms.BubbleSort);
});
App.get("/MergeSort", (req, res) => {
  res.json(SortingAlgorithms.MergeSort);
});
App.get("/SelectionSort", (req, res) => {
  res.json(SortingAlgorithms.SelectionSort);
});
App.get("/InsertionSort", (req, res) => {
  res.json(SortingAlgorithms.InsertionSort);
});
