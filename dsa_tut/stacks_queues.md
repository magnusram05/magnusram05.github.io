# Stacks & Queues

## What?

*  Stack - Push and Pop from top
*  Queue - Add to tail and remove from head

## Why?

*  Used to implement LIFO & FIFO respectively

## How?

*  Typically implemented using LinkedList

   *  Head -> Node1 -> Node2 -> Tail -> NULL

   *   ### Stack: 
       *Pop*
`data = Head.data;`
`Head = Head.next;`
`return data;`
       *Push*
`NewNode.next = Head;`
`Head = NewNode;`
    *   ### Queue:
        *Add*
`Tail.next = NewNode;`
`NewNode.next = null;`
`Tail = NewNode;`
       *Remove*
`data = Head.data;`
`Head = Head.next;`
`return data;`

## Time complexity:

*  Add/Remove from front/back - O(1)
*  Insert anywhere else/Search - O(n)
