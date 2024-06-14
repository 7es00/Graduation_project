<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use \App\Models\Program;
use App\Models\Stack;

class ProgramController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Program';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Program());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('status', __('Status'));
        $grid->column('features', __('Features'));
        $grid->column('link', __('Link'));
        $grid->column('stack_id', __('Stack id'));
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
        $show = new Show(Program::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('status', __('Status'));
        $show->field('features', __('Features'));
        $show->field('link', __('Link'));
        $show->field('stack_id', __('Stack id'));
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
        $form = new Form(new Program());

        $form->text('name', __('Name'));
        $form->text('status', __('Status'));
        $form->textarea('features', __('Features'));
        $form->url('link', __('Link'));
        $form->select('stack_id', __('Stack id'))->options(Stack::all()->pluck('name', 'id'));

        return $form;
    }
}
