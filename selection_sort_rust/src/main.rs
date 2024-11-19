fn main() {
    let mut arr = [5, 1, 9, 3, 10, 2, 6, 4, 8, 7];
    let result = selection_sort(&mut arr);
    println!("{:?}", result);
}

fn selection_sort(arr: &mut [i32]) -> &mut [i32] {
    for i in 0..arr.len() - 1 {
        let mut min_index = i;
        for j in i + 1..arr.len() {
            if arr[min_index] > arr[j] {
                min_index = j;
            }
        }
        arr.swap(i, min_index);
    }
    arr
}
