class MinStack {
    private ArrayList<Integer> stack;
    

    /** initialize your data structure here. */
    public MinStack() {
        this.stack = new ArrayList<>();
    }
    
    public void push(int x) {
        this.stack.add(x);
    }
    
    public void pop() {
        this.stack.remove(this.stack.size() - 1);
    }
    
    public int top() {
        return this.stack.get(this.stack.size() - 1);
    }
    
    public int getMin() {
        return Collections.min(this.stack);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */