require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", :name => "Jonathan") }
  subject(:dessert) { Dessert.new("cake", 35, "Jonathan") }

  describe "#initialize" do
    it "sets a type" do
      allow(dessert).to receive(:type).and_return("cake")
    end

    it "sets a quantity" do
      allow(dessert).to receive(:cake).and_return(35)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.ingredients).to eq([])
    end

    it "raises an argument error when given a non-integer quantity" do
      expect{ Dessert.new("cake", "thirty", "Jonathan") }.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      dessert.add_ingredient("rainbows")
      expect(dessert.ingredients).to include("rainbows")
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      pre_shuffle = dessert.ingredients
      # dessert.mix!
      expect(dessert.ingredients).not_to eq(pre_shuffle)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      expect(dessert.eat(5)).to eq(30)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect{ dessert.eat(50) }.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(dessert.serve).to include("Jonathan")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(dessert.make_more).to yield_with_args("cake")
    end
  end
end
