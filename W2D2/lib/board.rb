require_relative 'player'
require_relative 'board'

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14) { Array.new() }
    @name1 = name1
    @name2 = name2
    place_stones
  end

  def place_stones
    cups.each_index do |idx|
      4.times { cups[idx] << :stone } unless idx == 6 || idx == 13
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless (1..12).include?(start_pos)
  end

  def make_move(start_pos, current_player_name)
    num_stones = cups[start_pos].length
    cups[start_pos] = []

    current_pos = start_pos
    until num_stones == 0
      current_pos += 1
      current_pos = 0 if current_pos > 13

      if current_pos == 13 && current_player_name == @name1
        current_pos = 0
      elsif current_pos == 6 && current_player_name == @name2
        current_pos += 1
      end

      cups[current_pos] << :stone
      num_stones -= 1
    end

    render
    next_turn(current_pos, current_player_name)
  end

  def next_turn(ending_cup_idx, current_player_name)
    if (ending_cup_idx == 6 && current_player_name == @name1) ||
      (ending_cup_idx == 13 && current_player_name == @name2)
      return :prompt
    elsif cups[ending_cup_idx].length == 1
      return :switch
    elsif cups[ending_cup_idx].length > 1
      return ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if cups[0..5].all?(&:empty?) || cups[7..12].all?(&:empty?)
    false
  end

  def winner
    return :draw if cups[6] == cups[13]
    cups[6].length > cups[13].length ? @name1 : @name2
  end
end
