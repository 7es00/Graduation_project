<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use \App\Models\Quiz;
use App\Models\Stack;
use App\Models\Track;

class QuizController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Quiz';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Quiz());
        $grid->column('id', __('Id'));
        $grid->column('Question', __('Question'));
        $grid->column('A', __('A'));
        $grid->column('B', __('B'));
        $grid->column('C', __('C'));
        $grid->column('Correct_Answer', __('Correct Answer'));
        $grid->column('level', __('Level'));
        $grid->column('stack_id', __('Stack id'))->display(function ($stack_id) {
            $stack = Stack::find($stack_id);
            return $stack ? $stack->name : '-';
        });
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Quiz::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('Question', __('Question'));
        $show->field('A', __('A'));
        $show->field('B', __('B'));
        $show->field('C', __('C'));
        $show->field('Correct_Answer', __('Correct Answer'));
        $show->field('level', __('Level'));
        $show->field('Stack_id', __('Stack id'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Quiz());

        $form->text('Question', __('Question'));
        $form->text('A', __('A'));
        $form->text('B', __('B'));
        $form->text('C', __('C'));
        $form->text('Correct_Answer', __('Correct Answer'));
        $form->select('level', __('Level'))->options([
            'Beginner' => 'Beginner',
            'Intermediate' => 'Intermediate',
            'Advanced' => 'Advanced'
        ]);
        $form->select('stack_id', __('stack id'))->options(Stack::all()->pluck('name', 'id'));

        return $form;
    }
}
