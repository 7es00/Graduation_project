<?php

namespace App\Admin\Controllers;

use App\Models\Stack;
use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use \App\Models\Track;

class TrackController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Track';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Track());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('description', __('Description'));
        $grid->column('level', __('Level'));
        $grid->column('logo', __('Logo'));
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
        $show = new Show(Track::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('description', __('Description'));
        $show->field('level', __('Level'));
        $show->field('logo', __('Logo'));
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
        $form = new Form(new Track());

        $form->text('name', __('Name'));
        $form->textarea('description', __('Description'));
        $form->select('level', __('Level'))->options([
            'Beginner' => 'Beginner',
            'Intermediate' => 'Intermediate',
            'Advanced' => 'Advanced'
        ]);
        $form->text('logo', __('Logo'));
        $form->select('stack_id', __('Stack id'))->options(Stack::all()->pluck('name', 'id'));


        return $form;
    }
}
